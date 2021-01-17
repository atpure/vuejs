<template>
  <div class="crypto-page">
    <h1 class="page-title">Crypto</h1>
        <b-row>
          <b-col md="6" xl="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="현재가" close>
                <div class="d-flex justify-content-between align-items-center mb-lg">
                  <h2>48,863,800</h2>
                  <!-- <i class="la la-arrow-right text-primary la-lg rotate-315" /> -->
                </div>
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt">
                    <h6>1,100</h6><p class="text-muted mb-0 mr"><small>환율</small></p>
                  </div>
                  <div class="mt">
                    <h6>47,653,640</h6><p class="text-muted mb-0"><small>Bitfinex</small></p>
                  </div>
                  <div class="mt">
                    <h6>2.54%</h6><p class="text-muted mb-0 mr"><small>Premium</small></p>
                  </div>
                </div>
              </Widget>
            </div>
          </b-col>
          <b-col md="6" xl="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="자산" close>
                <div class="d-flex justify-content-between align-items-center mb-lg">
                  <h2>48,863,800</h2>
                  <!-- <i class="la la-arrow-right text-primary la-lg rotate-315" /> -->
                </div>
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt">
                    <h6>1,000,000,000</h6><p class="text-muted mb-0 mr"><small>평가손익</small></p>
                  </div>
                  <div class="mt">
                    <h6>100.00%</h6><p class="text-muted mb-0"><small>수익율</small></p>
                  </div>
                </div>
              </Widget>
            </div>
          </b-col>
        </b-row>
  </div>
</template>
<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Dashboard',
  components: {
    Widget
  },
};

</script>

<style src="./Crypto.scss" lang="scss" />