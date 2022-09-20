self.addEventListener('push', (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
icon:'https://png.pngtree.com/png-vector/20191021/ourlarge/pngtree-vector-cycling-icon-png-image_1834570.jpg',
image: 'https://png.pngtree.com/png-vector/20191021/ourlarge/pngtree-vector-cycling-icon-png-image_1834570.jpg'
  });
});
