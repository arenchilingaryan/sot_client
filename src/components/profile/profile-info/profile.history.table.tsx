import React from 'react'

type ProfileHistoryTableItemProps = {
  amount: number
  link: string
  genre: string
  trafic: string
  price: number
  code: string
  idx: number | undefined
}


const ProfileHistoryTableItem: React.FC<ProfileHistoryTableItemProps> = (props) => {
  const { idx, link, trafic, genre, amount, price } = props
  const totalprice: number = amount * price
  return (
    <div className="history-table-block">
      <span> {idx} </span>
      <span>
        <a itemProp="identifier" target="_blank" rel="noopener noreferrer" href={link}>
          {link.substr(21)}
        </a>
      </span>
      <span> {trafic} </span>
      <span> {genre} </span>
      <span> {amount} </span>
      <span itemProp="price"> {totalprice}$ </span>
    </div>
  )
}

export default ProfileHistoryTableItem