const mockResponse = {
  data: [
    {
      name: 'Leanne Graham',
      albumCount: 10,
    },
    {
      name: 'Ervin Howell',
      albumCount: 10,
    },
  ],
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
}
