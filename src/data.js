export const equipments = [
{ id: '001', name: 'Tablet', description: 'Very good tablet.' },
{ id: '002', name: 'Phone', description: 'Not so good Android.' },
{ id: '003', name: 'Phablet', description: 'Too expensive phablet.' },
{ id: '004', name: 'Tablet', description: 'Cheap tablet.' },
{ id: '005', name: 'Tablet', description: 'Slow tablet.' },
{ id: '006', name: 'Laptop', description: 'Fast laptop.' },
]

export const users = [
{ id: '001', name: 'Erkki', email: 'erkki123@example.com' },
{ id: '002', name: 'Kari', email: 'kartsa1337@example.com' },
{ id: '003', name: 'Stella', email: 'stellus@vanha-autokarkki.com' },
{ id: '004', name: 'Inkeri', email: 'inkeri@example.com' },
{ id: '005', name: 'Samuel', email: 'samppa123@example.com' },
{ id: '006', name: 'Emmanuel', email: 'emmaneul@turu.com' },
]

export const loans = [
{ id: '001', equipmentId: '001', userId: '003', begins: '2018-09-09', ends: '2018-10-15', returned: '-' },
{ id: '002', equipmentId: '002', userId: '001', begins: '2018-08-01', ends: '2018-09-05', returned: '2018-09-04' },
{ id: '003', equipmentId: '003', userId: '002', begins: '2018-11-15', ends: '2018-12-06', returned: '-' },
{ id: '004', equipmentId: '004', userId: '002', begins: '2018-12-02', ends: '2018-12-24', returned: '2018-12-11' },
{ id: '005', equipmentId: '005', userId: '003', begins: '2018-12-15', ends: '2018-12-29', returned: '-' },
]
