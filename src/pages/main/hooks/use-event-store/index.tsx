import create from 'zustand';

interface EventState {
    selectedEvent: string,
    setSelectedEvent: (event: string) => void,
}

    const useEventStore = create<EventState>((set) => ({
	selectedEvent: 'https://www.thespike.gg/events/stats/vct-2022-off-season-superdome/1999',
	setSelectedEvent: (event: string) => set({ selectedEvent: event }),
    }));

	export default useEventStore;
