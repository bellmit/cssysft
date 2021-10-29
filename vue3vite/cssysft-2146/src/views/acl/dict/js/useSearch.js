import comCfg from "../../../../components/base-com/com-config/com-config";
import enums from "../../../../utils/enums";
import exps from "../../../../utils/exps";

export default function useSearch(searchRow, searchExp, searchLoading, onSearch) {
  searchExp[enums.exp.orDiff + 'code#name' + enums.exp.midJoin + 'code'] = '33';
  searchExp[enums.exp.orDiff + 'code#name' + enums.exp.midJoin + 'name'] = '99';
  searchExp[enums.exp.asc] = 'sequence';
  // todo 另外再封装一个json版
  searchRow.value = [
    [
      {
        rowObj: {colStyle: {flex: '0 0 100px', margin: '0 5px 5px 0px'}},
        formItemObj: {labelWidth: '0px', size: 'medium', style: {marginBottom: '0'}},
        domObj: {model: 'name', placeholder: '名称', dom: 'input', type: 'text'},
        searchObj: {exp: exps.like}
      },
      {
        rowObj: {colStyle: {flex: '0 0 100px', margin: '0 5px 5px 5px'}},
        formItemObj: {labelWidth: '0px', size: 'medium', style: {marginBottom: '0'}},
        domObj: {model: 'code', placeholder: '编码', dom: 'input', type: 'text'},
        searchObj: {exp: exps.eq}
      },
      /*{
        rowObj: {colStyle: {flex: '0 0 100px', margin: '0 5px 5px 0px'}},
        formItemObj: {labelWidth: '0px', size: 'medium', style: {marginBottom: '0'}},
        domObj: {model: enums.exp.pre + 'code', placeholder: '编码开始', dom: 'input', type: 'text'},
        searchObj: {exp: exps.between}
      },
      {
        rowObj: {colStyle: {flex: '0 0 100px', margin: '0 5px 5px 0px'}},
        formItemObj: {labelWidth: '0px', size: 'medium', style: {marginBottom: '0'}},
        domObj: {model: enums.exp.suf + 'code', placeholder: '编码结束', dom: 'input', type: 'text'},
        searchObj: {exp: exps.between}
      },*/
      {
        rowObj: {colStyle: {flex: '0 0 100px', margin: '0 5px 5px 0px'}},
        formItemObj: {labelWidth: '0px', size: 'medium', style: {marginBottom: '0'}},
        domObj: {model: 'isDeleted', placeholder: '是否有效', dom: 'select', options: [{id: '1', code: '0', name: '有效'}, {id: '2', code: '1', name: '无效'}],
          option: {key: 'id', label: 'name', value: 'code'}, clearable: true,
        },
        searchObj: {exp: exps.eq}
      },
      {
        rowObj: {colStyle: {flex: '0 0 89px', margin: '0 5px 5px 15px'}},
        domObj: {
          dom: 'button', label: '搜索', click: 'search-click', type: comCfg.elButton.search,
          icon: comCfg.elButton.searchIcon, size: comCfg.elButton.size, loading: searchLoading
        }
      },
      {
        rowObj: {colStyle: {flex: '0 0 89px', margin: '0 5px 5px 5px'}},
        domObj: {
          dom: 'button', label: '新增', click: 'add-click', type: comCfg.elButton.add,
          icon: comCfg.elButton.addIcon, size: comCfg.elButton.size
        }
      },
      {
        rowObj: {colStyle: {flex: '0 0 89px', margin: '0 5px 5px 5px'}},
        domObj: {
          dom: 'button', label: '编辑', click: 'edit-click', type: comCfg.elButton.edit,
          icon: comCfg.elButton.editIcon, size: comCfg.elButton.size
        }
      },
      {
        rowObj: {colStyle: {flex: '0 0 89px', margin: '0 5px 5px 5px'}},
        domObj: {
          dom: 'button', label: '删除', click: 'delete-click', type: comCfg.elButton.delete,
          icon: comCfg.elButton.deleteIcon, size: comCfg.elButton.size
        }
      }
    ]
  ];

  return {};
}
