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
                  <th scope="col" class="border-0">element</th>
                  <th scope="col" class="border-0">location</th>
                  <th scope="col" class="border-0">message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>2021-05-22T04:40:27.222000Z</td>
                  <td>-</td>
                  <td>False</td>
                  <td>1</td>
                  <td>-</td>
                  <td>60158 INFO System-Management: All xGrid administrator actions are logged using this meesage</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2021-05-22:T04:47:08.494000Z</td>
                  <td>-</td>
                  <td>True</td>
                  <td>2</td>
                  <td>-</td>
                  <td>24317 ERROR External-Active-Directory: LDAP search in domain failed</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2021-05-22:T04:48:48.812000Z</td>
                  <td>-</td>
                  <td>False</td>
                  <td>2</td>
                  <td>-</td>
                  <td>52055 NOTICE Distributed-Management: Local mode rquest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
