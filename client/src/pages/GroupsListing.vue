<template>
<div class="main-content flex flex-col flex-grow p-4 items-center">
    <GroupCard title="Test title Group 1" />
    <GroupCard title="Test title Group 2" />
    <GroupCard title="Test title Group 2" />
</div>
</template>

<script>
import GroupCard from '@/components/GroupCard.vue';
export default {
    components: {
	  GroupCard
    }
}
</script>