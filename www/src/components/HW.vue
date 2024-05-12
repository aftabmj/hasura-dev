<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- <ul v-if="friendList.length">
      <li v-for="friend in friendList" :key="friend.id">
        {{ friend.name }}
      </li>
    </ul>
    <p v-else>No friends found.</p> -->
    <div v-if="auditData">
      <h2>Audit Issues Client Only in Assessment</h2>
      <ul>
        <li v-for="issue in auditData.audit_issues_client_onlyin_assessment" :key="issue.id">
          ID: {{ issue.id }}, Client ID: {{ issue.client_id }}
        </li>
      </ul>

      <h2>Audit Run</h2>
      <ul>
        <li v-for="run in auditData.audit_run" :key="run.id">
          Run Datetime: {{ run.run_datetime }}
        </li>
      </ul>
    </div>
    <p v-else>No audit data found.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';

import {AUDIT_CLIENT_ONLYIN_ASMT} from '@/queries/data_audits';
import { AuditClientOnlyInAssessmentQueryResult } from '@/types/data_audits';

defineProps<{ msg: string }>();

const { result } = useQuery<AuditClientOnlyInAssessmentQueryResult>(AUDIT_CLIENT_ONLYIN_ASMT);
const auditData = ref<AuditClientOnlyInAssessmentQueryResult | null | undefined>(null);

watch(
  () => result.value,
  (newValue) => {
    if (newValue) {
      auditData.value = newValue;
    } else {
      auditData.value = null;
    }
  },
  { immediate: true }
);

</script>