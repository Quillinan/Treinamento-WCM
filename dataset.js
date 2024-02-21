function defineStructure() {}
function onSync(lastSyncDate) {}
function createDataset(fields, constraints, sortFields) {
  var dataset = DatasetBuilder.newDataset();

  //Cria as colunas
  dataset.addColumn("Nome");

  //Cria os registros
  dataset.addRow(new Array("Outback"));
  dataset.addRow(new Array("Bistrô"));
  dataset.addRow(new Array("Quentinha"));
  dataset.addRow(new Array("Leve Mix"));

  return dataset;
}
function onMobileSync(user) {}
