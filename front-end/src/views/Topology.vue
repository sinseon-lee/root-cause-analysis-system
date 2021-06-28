
<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Topology Monitoring</h3>
      </d-col>
    </d-row>

    <!-- Content -->
    <d-row>
      <d-col >
        <topologyDetails />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import TopologyDetails from '@/components/topology/TopologyDetails.vue';

export default {
  name: 'topology',
  components: {
    topologyDetails: TopologyDetails,
  },
};
</script>
