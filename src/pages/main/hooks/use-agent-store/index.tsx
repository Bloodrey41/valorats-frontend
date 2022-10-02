import create from 'zustand';

interface AgentState {
    selectedAgent: string,
    setSelectedAgent: (agent: string) => void,
}

    const useAgentStore = create<AgentState>((set) => ({
	selectedAgent: '',
	setSelectedAgent: (agent: string) => set({ selectedAgent: agent }),
    }));

	export default useAgentStore;
