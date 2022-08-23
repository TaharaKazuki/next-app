import { FC } from 'react'

type Props = {
  onChange: (type: string, args: { list: number }) => void
  filter: { view: { list: number } }
}

export const FilteringMenu: FC<Props> = ({ onChange, filter }) => {
  return (
    <div className="filtering-menu mb-2">
      <div onClick={() => onChange('view', { list: +!filter.view.list })}>
        List Filter - {filter.view.list}
      </div>
    </div>
  )
}
