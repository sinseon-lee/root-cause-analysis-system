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
                <tr>
                  <td>0</td>
                  <td>host1</td>
                  <td>host</td>
                  <td>started</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>host2</td>
                  <td>host</td>
                  <td>started</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>switch1</td>
                  <td>switch</td>
                  <td>on</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>switch2</td>
                  <td>switch</td>
                  <td>on</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>{{managedElements}}</td>
                  <td>?</td>
                  <td>??</td>
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
                <tr>
                  <td><d-form-input type="text" id="addId" placeholder="id" value="" /></td>
                  <td><d-form-input type="text" id="addName" placeholder="name" value="" /></td>
                  <td><d-form-input type="text" id="addType" placeholder="type" value="" /></td>
                  <td><d-form-input type="text" id="addState" placeholder="state" value="" /></td>
                  <td><d-form-input type="text" id="addIpAddress" placeholder="ipAddress" value="" /></td>
                  <td><d-form-input type="text" id="addLocation" placeholder="location" value="" /></td>
                  <td><d-form-input type="text" id="addUsage" placeholder="usage" value="" /></td>
                  <td><d-form-input type="text" id="addDescription" placeholder="description" value="" /></td>
                  <td><d-form-input type="text" id="addSSHId" placeholder="ssh_id" value="" /></td>
                  <td><d-form-input type="text" id="addSSHPw" placeholder="ssh_pw" value="" /></td>
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
// export default {
//  created() {
//    this.$http.get('/api/managedElements/')
//      .then((response) => {
//        this.managedElements = response.data;
//      });
//  },
//  data() {
//    return {
//      managedElements: [],
//    };
//  },
//  addNewElement() {
//    console.log('Click addNewElement');
//
//    axios.get('/api/managedElements')
//      .then((res) => { console.log(res.data); });
//  },
// };
</script>
