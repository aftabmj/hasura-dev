import gql from 'graphql-tag';

export const AUDIT_CLIENT_ONLYIN_ASMT = gql`
query Audit_ClientOnlyInAssessment {
  audit_issues_client_onlyin_assessment {
    id
    client_id
  }
  audit_run {
    id
    run_datetime
  }
}
`;
