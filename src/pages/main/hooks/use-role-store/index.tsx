import create from 'zustand';

interface RoleState {
    selectedRole: string,
    setSelectedRole: (role: string) => void,
}

    const useRoleSotre = create<RoleState>((set) => ({
	selectedRole: '',
	setSelectedRole: (role: string) => set({ selectedRole: role }),
    }));

	export default useRoleSotre;
