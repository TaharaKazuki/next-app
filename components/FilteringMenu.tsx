import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

type Props = {
  onChange: (type: string, args: { list: number }) => void
  filter: { view: { list: number } }
}

const LIST_VIEW_ICONS = ['fa-list', 'border-all']

export const FilteringMenu: FC<Props> = ({ onChange, filter }) => {
  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        className="clickable hoverable"
        size="2x"
        icon={LIST_VIEW_ICONS[filter.view.list] as IconProp}
        onClick={() => onChange('view', { list: +!filter.view.list })}
      />
    </div>
  )
}
