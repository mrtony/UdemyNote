TableHelper with Controller使用範例
===
練習在Directive中使用Controller來取代使用link function 直接去控制DOM.

### 範例重點
1. 在DDO中定義controller及使用controllerAs 
```
controller: controller,
controllerAs: 'vm',
bindToController: true,
```
2. 使用`watchCollection`監控資料來源變化
```
$scope.$watchCollection('datasource', getColumns);
```
3. 在isolate scope中,controller與DDO中的scope是相同的物件,所以其中的變數可共用

```
//DDO
scope: {
    columnmap: '@',
    datasource: '='  
}

function controller() {
    vm.columnmap = $scope.$eval(vm.columnmap);
}
```