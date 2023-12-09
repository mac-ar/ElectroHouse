const listaProductos = [
      {
            id: 1,
            nombre: 'Heladera Electrolux',
            descripcion: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`,
            img: 'heladera.jpg',
            categoria: '',
            oferta: 'false',
            precio: '390.770',
            descuento: 40,
            especificaciones: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`
      },
      {
            id: 2,
            nombre: 'Aire Split BGH',
            descripcion: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`,
            img: 'aire.jpg',
            categoria: '',
            oferta: 'false',
            precio: '690.770',
            descuento: 40,
            especificaciones: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`
      },
      {
            id: 3,
            nombre: 'Licuadora Liliana',
            descripcion: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`,
            img: 'licuadora.jpg',
            categoria: '',
            oferta: 'false',
            precio: '69.770',
            descuento: 40,
            especificaciones: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`
      },
      {
            id: 4,
            nombre: 'Plancha Phillips',
            descripcion: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`,
            img: 'plancha.jpg',
            categoria: '',
            oferta: 'false',
            precio: '36.750',
            descuento: 40,
            especificaciones: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`
      },
      {
            id: 5,
            nombre: 'Microondas BGH',
            descripcion: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`,
            img: 'micro.jpg',
            categoria: '',
            oferta: 'false',
            precio: '115.770',
            descuento: 40,
            especificaciones: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`
      },
      {
            id: 6,
            nombre: 'Estufa Gamma',
            descripcion: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`,
            img: 'estufa.jpg',
            categoria: '',
            oferta: 'true',
            precio: '25.530',
            descuento: 40,
            especificaciones: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`
      },
      {
            id: 7,
            nombre: 'Cafetera Express',
            descripcion: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`,
            img: 'cafetera.jpg',
            categoria: '',
            oferta: 'true',
            precio: '116.290',
            descuento: 40,
            especificaciones: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`
      },
      {
            id: 8,
            nombre: 'Lavarropa Drean',
            descripcion: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`,
            img: 'lavarropa.jpg',
            categoria: '',
            oferta: 'true',
            precio: '389.999',
            descuento: 40,
            especificaciones: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`
      },
      {
            id: 9,
            nombre: 'Aspiradora',
            descripcion: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`,
            img: 'aspiradora.jpg',
            categoria: '',
            oferta: 'true',
            precio: '85.490',
            descuento: 40,
            especificaciones: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`
      },
      {
            id: 10,
            nombre: 'Batidora',
            descripcion: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt.`,
            img: 'batidora.jpg',
            categoria: '',
            oferta: 'true',
            precio: '77.399',
            descuento: 40,
            especificaciones: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugit pariatur vel nam,
      cum voluptate, obcaecati tempora inventore mollitia minus aperiam unde dolorum laborum?
      Quos aperiam illum natus, tempora hic sed nesciunt repellat laudantium deleniti voluptas
      voluptatum molestias dolorum sint eaque iure iste cum maiores assumenda. Praesentium
      neque qui corrupti!`
      }
];

module.exports = listaProductos;