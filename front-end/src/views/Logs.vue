<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Network System</span>
        <h3 class="page-title">Logs</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">All Logs</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">id</th>
                  <th scope="col" class="border-0">time</th>
                  <th scope="col" class="border-0">type</th>
                  <th scope="col" class="border-0">isError</th>
                  <th scope="col" class="border-0">element id</th>
                  <th scope="col" class="border-0">location</th>
                  <th scope="col" class="border-0">message</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="log in logs" v-bind:key="log.id">
                  <td>{{ log.id }}</td>
                  <td>{{ log.time }}</td>
                  <td>{{ log.type }}</td>
                  <td>{{ log.isError }}</td>
                  <td>{{ log.elementId }}</td>
                  <td>{{ log.location }}</td>
                  <td>{{ log.message }}</td>
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
      logs: [
        {
          id: '0',
          time: '2021-05-22T04:40:27.222000Z',
          type: '-',
          isError: 'False',
          elementId: '60d9e2292737581b1d4f94e6',
          location: '-',
          message: '60158 INFO System-Management: All xGrid administrator actions are logged using this meesage',
        },
        {
          id: '1',
          time: '2021-05-22:T04:47:08.494000Z',
          type: '-',
          isError: 'True',
          elementId: '60d9e2292737581b1d4f94e6',
          location: '-',
          message: '24317 ERROR External-Active-Directory: LDAP search in domain failed',
        },
        {
          id: '2',
          time: '2021-05-22:T04:48:48.812000Z',
          type: '-',
          isError: 'False',
          elementId: '60d9e2292737581b1d4f94e6',
          location: '-',
          message: '52055 NOTICE Distributed-Management: Local mode rquest',
        },
      ],
    };
  },
};
</script>
