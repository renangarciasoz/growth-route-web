module.exports = args =>
  args.options([
    {
      name: 'port',
      description: 'The port on which the app runs',
      defaultValue: 3000,
      init: v => {
        if (Number.isNaN(Number(v))) {
          throw new Error('Port value must be a number.');
        }

        return Number(v);
      },
    },
  ]);
