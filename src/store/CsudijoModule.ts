import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";


@Module
export default class CsudijoModule extends VuexModule {
  // State:
  private showEditForm: boolean = false;
  private editedFood: any;
  private foods: any = [];


  private config: AxiosRequestConfig = {
    withCredentials: false,
    baseURL: "https://localhost:3000",
    timeout: 9000
  };


  // Getters
  get allFoods(): any[] {
    return this.foods;
  }

  get numberOfFoods(): number {
    return this.foods.length;
  }

  @Action
  public async getAllFoods() {
    axios
      .get("/csudijo", this.config)
      .then((res: AxiosResponse) => {
        const data: any = res.data;
        if (data) {
          this.context.commit("setAllFoods", data);
        }
      })
      .catch((ex: AxiosError) => {
        alert(ex.message);
      });
  }

  @Action
  public async addNewFood(newFood: any) {
    axios
      .post("/csudijo", newFood, this.config)
      .then((res: AxiosResponse) => {
        if (res.data.errmsg || res.data.message) {
          alert(res.data.errmsg ? res.data.errmsg : res.data.message);
        } else {
          this.context.dispatch("getAllFoods");
        }
      })
      .catch((ex: AxiosError) => {
        alert(ex.message);
      });
  }

  @Action
  public async updateFood(food: any) {
    axios
      .put(`/csudijo/${food._id}`, food, this.config) // update kezdeményezése
      .then((res: AxiosResponse) => {
        if (res.data.errmsg || res.data.message) {
          alert(res.data.errmsg ? res.data.errmsg : res.data.message);
        } else {
          this.context.dispatch("getAllFoods");
        }
      })
      .catch((ex: AxiosError) => {
        alert(ex.message);
      });
  }


  @Action
  public async deleteFood(food: any) {
    if (confirm("Are you sure you want to delete this food?")) {
      const tmpFood: any = food;
      axios
        .delete(`/csudijo/${food._id}`, this.config)
        .then((res: AxiosResponse) => {
          if (res.data.errmsg) {
            alert(res.data.errmsg);
          }
          this.context.dispatch("getAllFoods");
          alert(res.data.message);
        }).catch((ex: AxiosError) => {
          alert(ex.message);
        });
    }
  }

  @Mutation
  private setAllFoods(data: any): void {
    this.foods = data;
  }
}
