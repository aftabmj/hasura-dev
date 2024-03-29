<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import axios from 'axios'

defineProps<{ msg: string }>()

const count = ref(0)

interface MyData {
  // Define the shape of your data here
  mydata: {}
}

const mydata = ref<MyData | null>(null)
const endpoint = import.meta.env.VITE_NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT;

function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: Record<string, any>
) {
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  }).then(result => result.json());
}

const operation:string = `
  query MyQuery {
    friend {
      name
    }
  }
`;

function fetchMyQuery() {
  return fetchGraphQL(operation, 'MyQuery', {})
}

fetchMyQuery()
  .then(({ data, errors }) => {
    if (errors) {
      console.error(errors);
    }
    mydata.value  = data;
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

// const fetchData = async () => {
//   try {
//     //'http://localhost:8080/api/rest/friends'
//     const endpoint = import.meta.env.VITE_HASURA_PROJECT_ENDPOINT;
//     const response = await axios.post<MyData>(`${endpoint}`,{
//       headers: {
//         'x-hasura-admin-secret': import.meta.env.VITE_HASURA_ADMIN_SECRET
//       },
//       body: JSON.stringify({
//         query: `query MyQuery {
//           friend {
//             name
//           }
//         }`
//       })
//     })
//     data.value = await response.data
//   } catch (error) {
//     console.error(error)
//   }
// }

onMounted(() => {
  console.log(import.meta.env.VITE_HASURA_GRAPHQL_METADATA_DATABASE_URL);
  // console.log(process.env.HASURA_GRAPHQL_METADATA_DATABASE_URL)
  // fetchData()
  fetchMyQuery()
})

</script>

<template>
  <h1>{{ mydata }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
     Hello
  </p>
  <!-- <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
