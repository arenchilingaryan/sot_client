import React from 'react'
import './support.scss'
import { memoComponent } from '../../hooks/memo.component';

function Support() {
  return (
    <div itemScope itemType="http://schema.org/Organization" className="support__page page">
      <h1><strong>Support</strong></h1>
      <p> For all technical problems, please email: <strong itemProp="email">shotontopofficial@gmail.com</strong></p>
    </div>
  )
}
export default memoComponent(Support)