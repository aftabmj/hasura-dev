// export interface AuditClientOnlyInAssessmentQueryResult {
//   audit_issues_client_onlyin_assessment: {
//     id: number;
//     name: string;
//   }[];
// }

export interface AuditClientOnlyInAssessmentQueryResult {
  audit_issues_client_onlyin_assessment: AuditIssuesClientOnlyinAssessment[];
  audit_run: AuditRun[];
}

export interface AuditIssuesClientOnlyinAssessment {
  id: number;
  client_id: string;
}

export interface AuditRun {
  id: number;
  run_datetime: Date;
}
