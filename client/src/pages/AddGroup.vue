<template>
<div class="main-content flex flex-col flex-grow p-4 items-center">
    <form @submit.prevent="submitForm" class="max-w-sm rounded-lg overflow-hidden shadow-lg">
    <div class="px-4 py-5 bg-white sm:p-6">
        <p v-if="!formIsValid" class="text-red-500">Form not valid</p>
        <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input required v-model.trim="title" id="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
        </div>
        <div class="mb-4">
        <label for="number" class="block text-gray-700 text-sm font-bold mb-2">Max members</label>
        <input required v-model.number="membersMax" id="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number">
        </div>
        <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
        </button>
        </div>
    </div>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            membersMax: '',
            formIsValid: true
        }
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            this.error = null;
            if (this.title === '' || this.membersMax === '' || this.membersMax <= 0) {
                this.formIsValid = false;
                return;
            }

            this.isLoading = true;

            const actionPayload = {
                title: this.title,
                membersMax: this.membersMax
            };

            try {
                const jwt = this.$store.state.auth.token;
                const response = await fetch(`http://localhost:8000/v1/groups`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${jwt}`,
                    },
                    body: JSON.stringify(actionPayload)
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    const redirectUrl = '/' + (this.$route.query.redirect || 'groups');
                    this.$router.replace(redirectUrl);
		        }
            } catch (error) {
                this.error = error.message || 'Failed to authenticated, try later.';
            }

            this.isLoading = false;
        }
    }
}
</script>