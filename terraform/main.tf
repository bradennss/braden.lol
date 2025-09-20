terraform {
  required_providers {
    nomad = {
      source = "hashicorp/nomad"
    }
  }

  #   backend "pg" {
  #     schema_name = "braden_lol_tf_state"
  #   }
}

locals {
  app_domain = "braden.lol"
}

resource "nomad_namespace" "namespace" {
  name        = "braden-lol"
  description = "braden.lol"
}

resource "nomad_job" "website" {
  jobspec = templatefile("${path.module}/job.hcl", {
    namespace  = nomad_namespace.namespace.name
    app_domain = local.app_domain
    replicas   = 2
    cpu        = 100
    memory     = 100
    image_tag  = var.website_image_tag
  })

  depends_on = [nomad_variable.vars]
}
