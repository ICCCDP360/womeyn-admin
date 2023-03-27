import {memo,Fragment} from 'react'

//simple pages
import Simplerouter from '../router/simple-router'

//seetingoffCanvas
import SettingOffCanvas from '../../../../components/setting/SettingOffCanvas'

const Simple = memo(() => {
    return (
        <Fragment>
            <div className="wrapper">
                <Simplerouter />
            </div>
            <SettingOffCanvas name={true} />
        </Fragment>
    )
}
)

Simple.displayName="Simple"
export default Simple
