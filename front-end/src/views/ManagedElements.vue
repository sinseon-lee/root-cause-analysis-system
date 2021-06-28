<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Network System</span>
        <h3 class="page-title">Managed Elements</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">id</th>
                  <th scope="col" class="border-0">name</th>
                  <th scope="col" class="border-0">type</th>
                  <th scope="col" class="border-0">state</th>
                  <th scope="col" class="border-0">ipAddress</th>
                  <th scope="col" class="border-0">location</th>
                  <th scope="col" class="border-0">usage</th>
                  <th scope="col" class="border-0">description</th>
                  <th scope="col" class="border-0">ssh_id</th>
                  <th scope="col" class="border-0">ssh_pw</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="managedElement in managedElements" v-bind:key="managedElement._id">
                  <td>{{ managedElement._id }}</td>
                  <td>{{ managedElement.name }}</td>
                  <td>{{ managedElement.type }}</td>
                  <td>-</td>
                  <td>{{ managedElement.ipAddress }}</td>
                  <td>{{ managedElement.location }}</td>
                  <td>-</td>
                  <td>{{ managedElement.description }}</td>
                  <td>{{ managedElement.ssh_id }}</td>
                  <td>{{ managedElement.ssh_pw }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

<!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <d-button @click="addNewElement" ssize="sm" outline theme="secondary" class="mb-2 mr-1">+ add new element</d-button>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">name</th>
                  <th scope="col" class="border-0">type</th>
                  <th scope="col" class="border-0">state</th>
                  <th scope="col" class="border-0">ipAddress</th>
                  <th scope="col" class="border-0">location</th>
                  <th scope="col" class="border-0">usage</th>
                  <th scope="col" class="border-0">description</th>
                  <th scope="col" class="border-0">ssh_id</th>
                  <th scope="col" class="border-0">ssh_pw</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><d-form-input v-model="newName" type="text" placeholder="name" value="" /></td>
                  <td><d-form-input v-model="newType" type="text" placeholder="type" value="" /></td>
                  <td><d-form-input v-model="newState" type="text" placeholder="state" value="" /></td>
                  <td><d-form-input v-model="newIpAddress" type="text" placeholder="ipAddress" value="" /></td>
                  <td><d-form-input v-model="newLocation" type="text" placeholder="location" value="" /></td>
                  <td><d-form-input v-model="newUsage" type="text" placeholder="usage" value="" /></td>
                  <td><d-form-input v-model="newDescription" type="text" placeholder="description" value="" /></td>
                  <td><d-form-input v-model="newSSHId" type="text" placeholder="ssh_id" value="" /></td>
                  <td><d-form-input v-model="newSSHPw" type="text" placeholder="ssh_pw" value="" /></td>
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
      managedElements: [],
      newId: '',
      newName: '',
      newType: '',
      newState: '',
      newIpAddress: '',
      newLocation: '',
      newUsage: '',
      newDescription: '',
      newSSHId: '',
      newSSHPw: '',
    };
  },
  created() {
    console.log('created');

    // this.managedElements = this.$http.get('/api/managedElements').data;

    this.$http.get('/api/managedElements')
      .then((response) => {
        this.managedElements = response.data;
      });

    console.log(this.managedElements);
    /*
    this.$http.delete('/api/managedElement/60d993b35fe46f30a0176ffc');
    this.$http.delete('/api/managedElement/60d9bab7f598fe0ebb9c398b');
    this.$http.delete('/api/managedElement/60d9d8332737581b1d4f946a');
    this.$http.delete('/api/managedElement/60d9df2e2737581b1d4f94a5');
    this.$http.delete('/api/managedElement/60d9df712737581b1d4f94a9');
    this.$http.delete('/api/managedElement/60d9df812737581b1d4f94ac');
    this.$http.delete('/api/managedElement/60d9df9c2737581b1d4f94b0');
    this.$http.delete('/api/managedElement/60d9dfb52737581b1d4f94b4');
    */
  },
  methods: {
    addNewElement() {
      console.log('Click addNewElement');
      console.log(this.newId);

      const newElement = {
        managedElement: {
          name: this.newName,
          type: this.newType,
          ipAddress: this.newIpAddress,
          location: this.newLocation,
          description: this.newDescription,
          ssh_id: this.newSSHId,
          ssh_pw: this.newSSHPw,
        },
      };

      console.log('newElement :::');
      console.log(newElement);

      this.$http.post('/api/managedElement', newElement)
        .then((response) => {
          console.log('response.data :');
          console.log(response.data);
        });

      /*
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newElement),
      };

      fetch('/api/managedElement', requestOptions)
        .then((response) => {
          console.log(response);
          response.json();
          console.log(response);
        });
      */
      this.$http.get('/api/managedElements')
        .then((response) => {
          this.managedElements = response.data;
        });
    },
  },
};
</script>
