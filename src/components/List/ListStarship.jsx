/* eslint-disable */

import React, { useState ,useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchListStarship, fetchMore } from 'store/actions/Starship/List'
import { fetchDetailStarship } from 'store/actions/Starship/Detail'

import { List, Spin, Modal, Descriptions } from 'antd'

const ListStarship = ({ listStarship, fetchMore, fetchDetailStarship, detailStarship }) => {
  const [visible, changeVisible] = useState(false)
  
  const showDetail = (url) => {
    changeVisible(true)
    fetchDetailStarship(url)
  }

  useEffect(() => {
    window.onscroll = function() {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.scrollHeight
      ) {
        if (listStarship.next) {
          fetchMore({
            url: listStarship.next
          })
        }
      }
    }
  }, [listStarship])

  return (
    <div 
      className="wrap-item"
    >
      <List 
        itemLayout="vertical"
        size="large"
        loading={listStarship.isFetching}
        dataSource={listStarship.data}
        renderItem={item => (
          <List.Item key={Math.random()}>
            <List.Item.Meta
              title={<button type="button" onClick={() => showDetail(item.url)}>{item.name}</button>}
              description={item.Year}
            />
          </List.Item>
        )}
      />
      {
        listStarship.type === 'SCROLL_STARSHIP_REQUEST' && <div className="loading-cont"><Spin/></div>  
      }
      <Modal
        visible={visible}
        onCancel={() => changeVisible(false)}
        closable={false}
        footer={null}
      > 
        {
          detailStarship.isFetching && <div className="loading-cont"><Spin/></div>
        }
        {
          !detailStarship.isFetching && <>
            <h2>{detailStarship.data.name}</h2>
            <Descriptions layout="vertical">
              <Descriptions.Item label="Model">{detailStarship.data.model}</Descriptions.Item>
              <Descriptions.Item label="Class">{detailStarship.data.starship_class}</Descriptions.Item>
              <Descriptions.Item label="Manufacture">{detailStarship.data.manufacturer}</Descriptions.Item>
              <Descriptions.Item label="Crew">{detailStarship.data.crew}</Descriptions.Item>
              <Descriptions.Item label="Passengers">{detailStarship.data.passengers}</Descriptions.Item>
              <Descriptions.Item label="Capacity Cargo">{detailStarship.data.cargo_capacity} kg</Descriptions.Item>
              <Descriptions.Item label="Crew">{detailStarship.data.crew}</Descriptions.Item>
              <Descriptions.Item label="Crew">{detailStarship.data.crew}</Descriptions.Item>
            </Descriptions>
            <p>
              {detailStarship.data.Plot}
            </p>
          </>
        }
          
      </Modal>
    </div>
  )
}

export default connect(
  ({ starship_store: { listStarship, detailStarship } }) => ({ 
    listStarship, detailStarship
  }),
  { fetchListStarship, fetchMore, fetchDetailStarship }
)(ListStarship)