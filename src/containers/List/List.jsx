import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'

import { fetchListStarship } from 'store/actions/Starship/List'

import { SearchList, ListStarship } from 'components'

const List = ({ fetchListStarship }) => {
  useEffect(() => {
    fetchListStarship()
  })

  return (
    <div className="container">
      <SearchList />
      <div className="container-list">
        <div className="title-page">
          <h2>List Starships</h2>
        </div>
        <div className="body-page">
          <Row>
            <Col md={24} xs={24}>
              <ListStarship />
            </Col>
          </Row>
        </div>
        
      </div>
    </div>
  )
}


export default connect(
  null,
  { fetchListStarship }
)(List)