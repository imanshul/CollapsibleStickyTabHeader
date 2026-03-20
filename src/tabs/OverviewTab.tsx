import { FlatList } from "react-native";
import OverviewItem from "./components/OverviewItem";

const overviewData = [
    {
        id: '1',
        title: 'Total Balance',
        value: '₹1,25,000',
        change: '+2.5%',
    },
    {
        id: '2',
        title: 'Monthly Spend',
        value: '₹32,400',
        change: '-1.2%',
    },
    {
        id: '3',
        title: 'Investments',
        value: '₹58,000',
        change: '+4.1%',
    },
    {
        id: '4',
        title: 'Savings',
        value: '₹25,000',
        change: '+1.8%',
    },
    {
        id: '5',
        title: 'Rewards',
        value: '1200 pts',
        change: '+200',
    },
];
const OverviewTab = () => {
    return (
        <FlatList
            data={overviewData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <OverviewItem item={item} />
            )}
        />
    );
};

export default OverviewTab;