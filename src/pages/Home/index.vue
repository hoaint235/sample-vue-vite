<template>
  <q-card class="q-ma-lg" v-for="room in rooms" :key="room.id">
    <q-card-section>
      {{ room.name }}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { roomService } from '@services';
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const rooms = ref<any>([]);

    const fetchRooms = async () => {
      try {
        rooms.value = await roomService.getRooms();
        console.log( rooms.value);
      } catch (error) {
        
      }
    }

    onMounted(() => {
      fetchRooms();
    });

    return {
      rooms
    }
  }
});
</script>
