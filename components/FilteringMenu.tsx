import { FC } from 'react'

type Props = {
  onChange: () => void
}

export const FilteringMenu: FC<Props> = ({ onChange }) => {
  return (
    <div className="filtering-menu mb-2">
      <div onClick={onChange}>Change View</div>
    </div>
  )
}
