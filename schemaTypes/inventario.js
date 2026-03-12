export default {
  name: 'inventario',
  title: 'Inventario / Stock',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Insumo',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'stockActual',
      title: 'Stock Actual',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.min(0)
    },
    {
      name: 'unidadMedida',
      title: 'Unidad de Medida',
      type: 'string',
      options: {
        list: [
          { title: '📦 Unidades / Gramos / ml (Enteros)', value: 'unidades' },
          { title: 'Paca x 30', value: 'paca30' }
        ]
      },
      initialValue: 'unidades'
    },
    {
      name: 'stockMinimo',
      title: 'Alerta Stock Mínimo',
      type: 'number',
      description: 'El POS avisará cuando el stock baje de este número',
      initialValue: 5
    }
  ]
}