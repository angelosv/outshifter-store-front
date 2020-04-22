import { addLocaleData } from 'react-intl';
import defaultLang from './Default-lang' 


const Lang = {
    default: defaultLang
}
addLocaleData(Lang.default.data);

export default Lang; 