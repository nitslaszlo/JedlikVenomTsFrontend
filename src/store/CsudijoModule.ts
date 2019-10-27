import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module
export default class CsudijoModule extends VuexModule {
  // State (temp fields, direct access from store):
  private __showEditForm: boolean = false;
  private __editedFood: any;

  // State (classic fields)
  private _foods: any = [];
  private _topFoods: any = [];

  private config: AxiosRequestConfig = {
    // withCredentials: true,
    withCredentials: false,
    // Az ip számot írd át a backend Network címére és portjára, pl.:
    baseURL: "http://192.168.1.68:3000",
    // baseURL: "http://localhost:3000", // ha egy gépen fut minden (tesztelő böngésző, frontend, backend)
    timeout: 9000
  };

  // Getters
  get foods(): any[] {
    return this._foods;
  }

  get topFoods(): any[] {
    return this._topFoods;
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
          this.context.commit("mutateAllFoods", data);
        }
      })
      .catch((ex: AxiosError) => {
        alert(ex.message);
      });
  }

  @Action
  public async getTopFoodsList() {
    axios
      .get("/csudijobest", this.config)
      .then((res: AxiosResponse) => {
        const data: any = res.data;
        this.context.commit("mutateTopFoods", data);
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
          this.context.dispatch("getTopFoodsList");
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
          this.context.dispatch("getTopFoodsList");
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
          this.context.dispatch("getTopFoodsList");
          alert(res.data.message);
        })
        .catch((ex: AxiosError) => {
          alert(ex.message);
        });
    }
  }

  @Mutation
  private mutateAllFoods(data: any): void {
    this._foods = data;
  }

  @Mutation
  private mutateTopFoods(data: any): void {
    this._topFoods = [];
    if (!data.error) {
      this._topFoods = data.map((a: any) => a.foodName);
    }
  }
}
