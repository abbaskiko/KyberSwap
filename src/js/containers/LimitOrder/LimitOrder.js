import React from "react"
import { connect } from "react-redux"
import { getTranslate } from 'react-localize-redux'
import {HeaderTransaction} from "../TransactionCommon"



import {LimitOrderBody} from "../LimitOrder"


@connect((store, props) => {
  const account = store.account.account
  const translate = getTranslate(store.locale)
  const tokens = store.tokens.tokens
  const limitOrder = store.limitOrder
  const ethereum = store.connection.ethereum

  return {
    translate, limitOrder, tokens, account, ethereum,
    params: {...props.match.params},

  }
})

export default class LimitOrder extends React.Component {


  componentDidMount = () =>{
    if ((this.props.params.source.toLowerCase() !== this.props.limitOrder.sourceTokenSymbol.toLowerCase()) ||
      (this.props.params.dest.toLowerCase() !== this.props.limitOrder.destTokenSymbol.toLowerCase()) ){

      var sourceSymbol = this.props.params.source.toUpperCase()
      var sourceAddress = this.props.tokens[sourceSymbol].address

      var destSymbol = this.props.params.dest.toUpperCase()
      var destAddress = this.props.tokens[destSymbol].address

      // this.props.dispatch(exchangeActions.selectTokenAsync(sourceSymbol, sourceAddress, "source", this.props.ethereum))
      // this.props.dispatch(exchangeActions.selectTokenAsync(destSymbol, destAddress, "des", this.props.ethereum))
    }
  }


  render() {
    return (
      <div className={"limit-order-container"}>
        <HeaderTransaction page="exchange"/>
        <LimitOrderBody page="limit_order"/>        
      </div>
    )
  }
}
