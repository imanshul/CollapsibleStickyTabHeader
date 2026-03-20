import { StyleSheet, View } from "react-native";
import CustomTabBar from "./components/CustomTabBar";
import { TABS } from "./constants/TabConfig";
import { useState } from "react";
import Header from "./components/Header";
import OverviewTab from "./tabs/OverviewTab";
import HistoryTab from "./tabs/HistoryTab";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const Home = () => {
    const [activeTab, setActiveTab] = useState(TABS.OVERVIEW);
    return (
        <View style={styles.container}>
            <Header
                name="Anshul Thakur"
                mob="+91 98765-43210"
                photo="https://picsum.photos/id/4/300/300"
                 />
            <CustomTabBar selectedTab={activeTab} onTabPress={setActiveTab} />
            {activeTab === TABS.OVERVIEW && <OverviewTab /> }
            {activeTab === TABS.HISTORY && <HistoryTab /> }
        </View>
    )
}
export default Home;