import Vue from 'vue'
import { Button, Table, TableColumn,Select,Option,Input,Rate,Tag,Notification,Popconfirm,Popover,Dialog,Form,FormItem,DatePicker} from 'element-ui'

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Rate)
Vue.use(Tag)
Vue.use(Popover)
Vue.use(Popconfirm)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(DatePicker)


Vue.prototype.$notify = Notification