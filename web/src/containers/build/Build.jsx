// Copyright 2018 Red Hat, Inc
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may
// not use this file except in compliance with the License. You may obtain
// a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Build extends React.Component {
  static propTypes = {
    build: PropTypes.object,
    tenant: PropTypes.object,
    active: PropTypes.string,
    children: PropTypes.object,
  }

  render () {
    const { build, active } = this.props
    return (
      <div>
      <h2>Build result {build.uuid}</h2>
            <div>
              <ul className="nav nav-tabs nav-tabs-pf">
                <li className={active==='summary'?'active':undefined}>
                  <Link to={this.props.tenant.linkPrefix + '/build/' + build.uuid}>
                    Summary
                  </Link>
                </li>
                {build.manifest &&
                 <li className={active==='logs'?'active':undefined}>
                   <Link to={this.props.tenant.linkPrefix + '/build/' + build.uuid + '/logs'}>
                     Logs
                   </Link>
                 </li>}
                {build.output &&
                 <li className={active==='console'?'active':undefined}>
                   <Link
                     to={this.props.tenant.linkPrefix + '/build/' + build.uuid + '/console'}>
                     Console
                   </Link>
                 </li>}

              </ul>
              <div>
                {this.props.children}
              </div>
            </div>
        </div>
    )
  }
}


export default connect(state => ({tenant: state.tenant}))(Build)
