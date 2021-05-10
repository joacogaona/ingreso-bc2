import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

function Header() {
  const history = useHistory()
  return (
    <div
      style={{
        width: `100%`,
        height: `10vh`,
        display: `flex`,
        justifyContent: `space-around`,
        marginTop: `3%`,
      }}
    >
      <Button type="primary" onClick={() => history.goBack()}>
        Volver
      </Button>
      <Button onClick={() => history.push(`/admin`)}>Admin</Button>
    </div>
  )
}

export default Header
