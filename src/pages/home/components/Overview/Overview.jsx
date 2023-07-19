
import { OverviewWrapper, OverviewContainer } from './style'
import overviewData from '../../../../Design-system/components/Overview/OverviewData'
import OverviewComponent from '../../../../Design-system/components/Overview/Overview'


export default function Overview() {
  return (
    <OverviewWrapper>
      <div className="container">

        <OverviewContainer>
          {overviewData.map((ele) => { return <OverviewComponent key={ele.id} icon={ele.icon} title={ele.title} description={ele.description} /> })}
        </OverviewContainer>

      </div>
    </OverviewWrapper>

  )
}
