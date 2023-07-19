import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OverviewWrapper, Description, Title } from './Styles'


export default function OverviewComponent({ icon, title, description }) {
  return (
    <OverviewWrapper>
      <div><FontAwesomeIcon size='2xl' color='#f2545f' icon={icon} /></div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </OverviewWrapper>

  )
}
