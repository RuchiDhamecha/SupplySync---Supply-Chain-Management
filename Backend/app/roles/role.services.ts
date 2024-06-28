import Role from './role.schema';

export const createRoles = async () => {
  try {
    // Check if roles exist
    const existingRoles = await Role.find();
    if (existingRoles.length === 0) {
      // Roles not found, create them
      await Role.create([
        { _id: 1, name: 'manufacturer' },
        { _id: 2, name: 'distributor' },
        { _id: 3, name: 'customer' },
      ]);
      console.log('Roles created successfully');
    } else {
      console.log('Roles already exist');
    }
  } catch (error) {
    console.error('Error creating roles:', error);
    throw error;
  }
};
