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
                        <td>{{market.trade_price}}</td>
                      </tr>
                    </table>
                  </div>
                  <div class="mt">
                    <table>
                      <tr>
                        <th>자산</th>
                      </tr>
                      <tr>
                        <td>100</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt">
                    {{calculatekrw}}<p class="text-muted mb-0 mr"><small>Bittrex(₩)</small></p>
                  </div>
                  <div class="mt">
                    {{market.exchagerate}}<p class="text-muted mb-0 mr"><small>환율</small></p>
                  </div>
                </div>
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt">
                    {{market.ustrade_price}}<p class="text-muted mb-0 mr"><small>Bittrex</small></p>
                  </div>
                  <div class="mt">
                    {{calculateExcangeRate}}%<p class="text-muted mb-0 mr"><small>Premium</small></p>
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
          if (response.data[0].trade_price)
            this.market.trade_price = response.data[0].trade_price;
        });
    this.$http.get('/api/usmarket')
        .then((response) => {
          if (response.data.result.Last)
            this.market.ustrade_price = response.data.result.Last;
        });
    this.$http.get('/api/rate')
        .then((response) => {
          if (response.data[0].rate)
            this.market.exchagerate = response.data[0].rate;
        });
  },
  data () {
    return {
      market: {
        trade_price: 200,
        ustrade_price: 300,
        exchagerate: 1111
      },
    }
  },
  computed: {
    calculatekrw: function() {
      return (this.market.ustrade_price * this.market.exchagerate).toFixed(0);
    },
    calculateExcangeRate: function() {
      return ((this.market.trade_price - this.market.ustrade_price * this.market.exchagerate) * 100 / (this.market.ustrade_price * this.market.exchagerate)).toFixed(2);
    },
  }
};
</script>

<style src="./Crypto.scss" lang="scss" />