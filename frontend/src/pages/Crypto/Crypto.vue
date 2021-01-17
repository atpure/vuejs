<template>
  <div class="crypto-page">
        <b-row>
          <b-col md="6" xl="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0">
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt">
                    <table>
                      <tr>
                        <th>현재가</th>
                      </tr>
                      <tr>
                        <td>48,863,800</td>
                      </tr>
                    </table>
                  </div>
                  <div class="mt">
                    <table>
                      <tr>
                        <th>자산</th>
                      </tr>
                      <tr>
                        <td>48,863,800</td>
                      </tr>
                    </table>
                  </div>
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
        </b-row>
        <b-row>
          <b-col md="6" xl="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0">
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt">
                    <table>
                      <tr>
                        <th>현재가</th>
                      </tr>
                      <tr>
                        <td>{{market[0].trade_price}}</td>
                      </tr>
                    </table>
                  </div>
                  <div class="mt">
                    <table>
                      <tr>
                        <th>자산</th>
                      </tr>
                      <tr>
                        <td>48,863,800</td>
                      </tr>
                    </table>
                  </div>
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
        </b-row>
  </div>
</template>
<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Crypto',
  components: {
    Widget
  },
    created () {
    this.$http.get('/api/market')
        .then((response) => {
          this.market = response.data
        })
  },
  data () {
    return {
      market: []
    }
  }
};

</script>

<style src="./Crypto.scss" lang="scss" />