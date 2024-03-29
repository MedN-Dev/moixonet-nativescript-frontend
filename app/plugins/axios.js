import Vue from 'nativescript-vue'
import axios from 'axios'
// import httpAdapter from 'axios/lib/adapters/http'

// TOKEN EXPOLTACIO eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViYmI3ZjhlN2I5MjAwYTAzZWIwOTYxMmIyNTExZWM0YzEwMmI2MzYwOTRiZjhiNjZkZWE3YzBlNDllZTdiNzQwN2MyMDY0MTMwZDhmNzA5In0.eyJhdWQiOiIyIiwianRpIjoiNWJiYjdmOGU3YjkyMDBhMDNlYjA5NjEyYjI1MTFlYzRjMTAyYjYzNjA5NGJmOGI2NmRlYTdjMGU0OWVlN2I3NDA3YzIwNjQxMzBkOGY3MDkiLCJpYXQiOjE1NzQ5NDU4MjksIm5iZiI6MTU3NDk0NTgyOSwiZXhwIjoxNjA2NTY4MjI5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BTq5xjAjNHpRalehIpEDvOiNcU15v6rKGl7b0iZG0N6YyQX-ulUdK9cbsmevpruw9eo_8zCwMcrbzw3nOzl-DpFnKT1y4xqhlJkS9Su_mBe5L4FrrRPJ2SFQotF_UN7u5fkdv2mRET3N5VecwZPVfd9tevnd5cZF9ypa41W3XCW3e0gUt1NYHmvcWGPf8PPfKmjZzz4qj--fkF83SNIWQTUtJF9dPO1MmYqe012CbLmsjqjGj5daW89D7f_-XHXGSkU6evUt1VITENVdwMc6Sc5Mf18Hs3WR6nlqqPV8Rhy76yiVVvXMUmH6SMfMWv05UCweSsI2aEhVnzrsbm3w6liEO0cg8kImWxkqo9rB_YB2RvRGQxaY9XLuEsGSDL5V0CbTMcMBwbbS5LV0bv3WZFNG3YJUPTuBtEdIFiZVxZ6wtVsul20byFWah17cicBsd4TATd-H1bgfSQ_IlpCI8gMfVHzmURRMRyEjPFTSrRL4Qhybp5v4Lz996QuPCytxf7MpiF-aqDCNPcsmG8NUmpwDHsB18xXdaLdfPOZmN4M6HHEDEbc-mJw60x13PiAlAqU_h0mnw4O6oPC7K0ntEC7S3EZDZEcrNSaDbL9P29EZT4dxbWN0R4mIfsY3Lg6JRE5Buyp-AxrOwWBeuCZx3oBKrXUp09_UmJ1fQCeESqo
const myAxios = axios.create({
  baseURL: 'https://moixonet.acacha.scool.cat', // https://moixonet.karimlema9.scool.cat
  // adapter: httpAdapter,
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEyNWY4MzcxNTFkN2I5ODkyYWIxNjIwNDgzZGNmNWViMGIxNTI4ZmNjOWRkMTVjN2E4Yzc2YmEzNjdmOTM5MDcyNjY2Mzg0NjczZGE5MzFmIn0.eyJhdWQiOiIyIiwianRpIjoiYTI1ZjgzNzE1MWQ3Yjk4OTJhYjE2MjA0ODNkY2Y1ZWIwYjE1MjhmY2M5ZGQxNWM3YThjNzZiYTM2N2Y5MzkwNzI2NjYzODQ2NzNkYTkzMWYiLCJpYXQiOjE1NzQ5NTM0MDEsIm5iZiI6MTU3NDk1MzQwMSwiZXhwIjoxNjA2NTc1ODAxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.fiLCylgdoqPzX2JCxN7imn6E7_v2XHTrCmSbk7h_YAUPdUkW3VIu8vyi-iPnSWaXnZn6AQ2lz1tqpQrVZyxZFqbcCTMUV5EaMIlBFSFRJr5KAJTTIRLsqzk7NFz9cx_Qb9ZlpHYtRuAehRVEKCHfcgiCn7acR9DBc7gxBesDRryeRnuFyH6XwkKOcdSmIyrolLbXtCtpfkKujGjeMc_7ECWKLEaAe0swquxQ66-Uybgl5sZxF8TEw4-YUun0nRPpOzcyS48MqQEKK11QwK0NgxvP5RIGbOEaRXVR93b0f_fiZrAFxuG3B_Sf7RwdPDWMXxZpUyAbZKnkm7MoMc7TsiWNyfCfcT5bwB3yuQCpewBcIl30oBnVl3ye4mNffHU8sztyfJs8hoLSkEWn2r1mIGUg40AVrc50bLC5w0AhXmTkJoddXOfm4_BBihFRTAekpizDwL3js9FM5Tsd9aDXKzTMke-X_zrzJcY_JQbQDiO-WmPFacVyNlKg977udxBZlwf_8ZM5xQPHRuB82HBi1F6Fa865LPqTMFSBgm7JvhDySYaaN-N9a6fgYFgmbL7wVDFPJ7Im0CVq_a_s1Xy4o8GHuaO7DgrFUzqUvg4bg-U1By5HK_Q-7PL-qRo4rFwrw_8-fkWefW_bLUNynRuk9dyvB4qqbdpLzViQ2LDrsHE'
  }
})

// this helps WebStorm with autocompletion, otherwise it's not needed
Vue.prototype.$axios = myAxios

export default {
  install (Vue, options) {
    // Add Vue instance methods by attaching them to Vue.prototype.
    Vue.prototype.$axios = myAxios
  }
}
