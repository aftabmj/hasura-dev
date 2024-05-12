alter table "public"."audit_issues_client_onlyin_episode"
  add constraint "audit_issues_client_onlyin_episode_audit_run_id_fkey"
  foreign key ("audit_run_id")
  references "public"."audit_run"
  ("id") on update restrict on delete restrict;
