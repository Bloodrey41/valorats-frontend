import create from 'zustand';

interface MapState {
    selectedMap: string,
    setSelectedMap: (map: string) => void,
}

    const useMapStore = create<MapState>((set) => ({
	selectedMap: '',
	setSelectedMap: (map: string) => set({ selectedMap: map }),
    }));

	export default useMapStore;
