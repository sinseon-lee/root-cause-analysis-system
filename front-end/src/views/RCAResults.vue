<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Network System</span>
        <h3 class="page-title">RCA Results</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">All Results</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">id</th>
                  <th scope="col" class="border-0">root cause error id</th>
                  <th scope="col" class="border-0">root cause element id</th>
                  <th scope="col" class="border-0">message</th>
                  <th scope="col" class="border-0"> </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="RCAResult in RCAResults" v-bind:key="RCAResult.id">
                  <td>{{ RCAResult.id }}</td>
                  <td>{{ RCAResult.rootCauseErrorId }}</td>
                  <td>{{ RCAResult.rootCauseElementId }}</td>
                  <td>{{ RCAResult.message }}</td>
                  <td>
                    <d-button size="sm" outline theme="secondary" class="mb-2 mr-1">show all logs</d-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      RCAResults: [
        {
          id: '0',
          rootCauseErrorId: '1',
          rootCauseElementId: '60d9e2292737581b1d4f94e6',
          message: '24317 ERROR External-Active-Directory: LDAP search in domain failed',
        },
      ],
    };
  },
};
</script>
